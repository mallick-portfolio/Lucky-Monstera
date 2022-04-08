import React from 'react';
const Blogs = () => {
    return (
        <div className='w-[60%] mx-auto py-2 border-2 px-2 my-3 rounded-lg'>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-2xl font-semibold '>What is context API?</p>
                <p>The React Context API is a component structure, which allows us to share data across all levels of the application. The main aim of Context API is to solve the problem of prop drilling (also called "Threading").This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React hooks allow you to use local state inside function components, while the Context API allows you to share state with other components.</p>
            </div>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-2xl font-semibold'>What is Semantic tag?</p>
                <p>Semantics refers to the meaning of a piece of code.Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.On the flip side of this equation, tags such as b tag and i tag are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
            </div>
            <div className='border-2 px-5 pb-3 shadow rounded-lg'>
                <p className='text-2xl font-semibold'>Inline Vs Inline Block Vs Block</p>
                <div>
                    <p className='font-semibold'>Inline</p>
                    <p>Every HTML element is a block in the shape of a rectangle or a square and owns a display property. Unless explicitly specified, all of them have either inline, inline-block or block values set - with the exception of table and its associated elements. It's important to recognize how these HTML elements behave because they are the building blocks of our layouts. Examples:- a tag , span tag, strong tag</p>
                </div>
                <div>
                    <p className='font-semibold'>Inline Block</p>
                    <p>Inline blocks are very similar in nature as inline elements. They can do everything that inline does but can also be set some widths, heights and vertical margins. Examples:- input tag,button tag, select tag ,textarea tag</p>
                </div>
                <div>
                    <p className='font-semibold'>Block</p>
                    <p>The block elements always start on a new line. They will also take space of an entire row or width. It means that there can be no other HTML elements that can stand side by side with block level elements. You are also able to give set width/height and vertical margins.Examples:- p tag, div tag, h1-h6 tag, header tag</p>
                </div>
               
            </div>
        </div>

    );
};

export default Blogs;