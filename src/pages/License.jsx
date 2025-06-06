import React from 'react';
import { motion } from 'framer-motion'; // Optional, for adding animation

const License = () => {

  const data = [
    { title: 'MIT License', content: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:' },
    { title: 'The above copyright notice', content: 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.' },
    { title: 'THE SOFTWARE IS PROVIDED "AS IS"', content: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.' }
  ]
  return (
    <div className='w-full mx-auto'>
      <motion.div
        className="bg-teal-200 flex justify-center items-center text-gray-800 mt-14 w-full p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='max-w-3xl'>
          <h1 className="text-4xl font-bold my-6 text-center">MIT License</h1>
          <p className="text-sm mb-4">
            <strong>Copyright (c)</strong> 2024 djsnss-website
          </p>
          {
            data.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-base">{item.content}</p>
              </div>
            ))
          }
        </div>
      </motion.div>
    </div>
  );
};

export default License;
