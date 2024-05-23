import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
    }, [])

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
    }

    const thStyle = {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
        backgroundColor: '#f2f2f2',
    }

    const tdStyle = {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    }

    const paginationStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    }

    const pageLinkStyle = {
        margin: '0 5px',
        padding: '5px 10px',
        border: '1px solid #dddddd',
        cursor: 'pointer',
        backgroundColor: '#f2f2f2',
    }

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>User_ID</th>
                        <th style={thStyle}>Title</th>
                        <th style={thStyle}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map(post => (
                        <tr key={post.id}>
                            <td style={tdStyle}>{post.id}</td>
                            <td style={tdStyle}>{post.userId}</td>
                            <td style={tdStyle}>{post.title}</td>
                            <td style={tdStyle}>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={paginationStyle}>
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                    <div key={i + 1}
                        onClick={() => paginate(i + 1)}
                        style={pageLinkStyle}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataFetching
