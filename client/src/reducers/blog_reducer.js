export default function(state={},action){
    switch(action.type){
        case 'GET_BLOGS':
            return{...state,list:action.payload}
        case 'GET_BLOG':
            return {...state, blog:action.payload}
        case 'GET_BLOG_WITH_AUTHOR':
            return{
                ...state,
                blog: action.payload.blog,
                author:action.payload.author
            }
        case 'ADD_BLOG':
            return{...state,newblog:action.payload}
        case 'CLEAR_NEWBLOG':
            return{...state,newblog:action.payload}
        case 'UPDATE_BLOG':
            return {
                ...state,
                updateBlog: action.payload.success,
                blog: action.payload.doc 
                }  
        case 'DELETE_BLOG':
            return{
                ...state,
                postDeleted: action.payload
            }
        case 'CLEAR_BLOG':
            return{
                ...state,
                updateBlog:action.payload.udateBlog,
                blog: action.payload.blog,
                postDeleted: action.payload.postDeleted
            }
        default:
            return state;
    }
}
