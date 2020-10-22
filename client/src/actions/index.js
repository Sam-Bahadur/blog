import axios from 'axios'


export function getBlogs(
    limit = 5,
    start = 0,
    order ='asc',
    list = ''
    ){
        
        const request = axios.get(`/api/blogs?limit=${limit}&skip=${start}&order=${order}`).then(response=>{

            if(list){
                return[...list,...response.data]
            }
            else{
                return response.data
            }
        }
        )

        return{
            type:'GET_BLOGS',
            payload: request
        }

}
export function getBlogWithAuthor(id){
    const request = axios.get(`/api/getblog?id=${id}`)
    
    return(dispatch)=>{
        request.then(({data})=>{
            let blog = data;
            console.log(blog);

            axios.get(`/api/getAuthor?id=${blog.ownerId}`)
            .then(({data})=>{
                let response = {
                    blog,
                    author: data
                }
                dispatch({
                    type:'GET_BLOG_WITH_AUTHOR',
                    payload:response
                })

            })

            
        })
    }
}

// addblog

export function addBlog(blog){
    const request = axios.post('/api/blog',blog)
    .then(response => response.data);

    return{
        type:'ADD_BLOG',
        payload: request
    }
}
export function clearNewBlog(){
    return{
        type:'CLEAR_NEWBLOG',
        payload:{}
    }
}

// get user posts
export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
    .then(response => response.data)

    return{
        type: 'GET_USER_POSTS',
        payload :request
    }
}
export function getBlog(id){
    const request = axios.get(`/api/getBlog?id=${id}`)
    .then(response => response.data);

    return{
        type:'GET_BLOG',
        payload:request
    }
}

export function updateBlog(data){
    const request = axios.post(`/api/blog_update`,data)
    .then(response => response.data);
    return{
        type: 'UPDATE_BLOG',
        payload: request
    }
}

export function deleteBlog(id){
    const request = axios.delete(`/api/delete_blog?id=${id}`)
    .then(response => response.data)

    return{
        type:'DELETE_BLOG',
        payload: request
    }
}

export function clearBlog(){
    return {
        type: 'CLEAR_BLOG',
        payload:{
            book:{},
            updateBlog:false,
            postDeleted: false
        }
    }
}

//************/ USERS ************ //

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
    .then(response=>response.data)

    return{
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
    .then(response => response.data);

    return{
        type: 'USER_AUTH',
        payload: request
    }
}