import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Страницы поста {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div style={{marginTop: 20}}>{post.id}. {post.title}</div>
            }
            <h2 style={{marginTop: 20}}>
                Комментарии
            </h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map((comm, id) =>
                        <div key={id} style={{marginTop: 20}}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;