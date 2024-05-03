import React from "react";

// 스타일 객체 정의
const styles = {
    comment: {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9',
    },
    author: {
      fontWeight: 'bold',
    },
    content: {
      marginTop: '5px',
    },
  };

function Comment(props) {
    return(
        <div>
            <h1> 제가 만든 첫 컴포넌트입니다</h1>
        </div>
    );
    
}
export default Comment;