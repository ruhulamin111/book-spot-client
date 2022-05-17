import React from 'react';

const Blogs = () => {
    return (
        <div id=''>
            <h3 className='text-center text-info my-2'>Theory Part</h3>
            <h5>Question 1:What is the difference between JS and Node.js? </h5>
            <p>Ans:  Javascript is a programming language and is used for website writing. When Nodejs is a Js runtime environment.Js is use in frontend development. Nodejs is used in server-side development.Js only run in the browser. We can run Js outside the browser with the help of Nodejs.   </p>
            <h5>Question 2: When we use node.js and mongodb?  </h5>
            <p>Ans:Node.js is a single-threaded and open-source also cross-platform runtime environment for building a fast and scalable server-side. Node.js handling lots of I/O operations and use it to build real-time web applications. NoSQL databases like MongoDB are a good choice when your data is document-centric.As flexibility is an inevitable part of a data-driven application, MongoDB is commonly used for real-time analytics, Big Data, mobile applications. </p>
            <h5>Question 3: What is the difference between Sql and NoSql?   </h5>
            <p>Ans:Sql databases have fixed or predefined schema	when NoSql  have dynamic schema. Sql is vertically scalable when NoSql is 	horizontally scalable. Sql is relational database system and NoSql is non-relational database system.  </p>
        </div>
    );
};

export default Blogs;