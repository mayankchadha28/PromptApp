"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/profile';

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    
    const [myposts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          if(session?.user.id) {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            setPosts(data);
          }
        };
        
        fetchPosts();
    }, [session?.user.id]);
    
    
    const handleEdit = (post) => {
      console.log("Edit button Pressed", post);
      router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete the prompt?");
        if(hasConfirmed){
          try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
              method: 'DELETE'
            });
            const filteredPosts = myposts.filter((p) => p._id !== post._id);
            setPosts(filteredPosts);
          } catch (error) {
            console.log(error);
          }
        }
    };
    
    return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={myposts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        
    />
  );
}

export default MyProfile;
