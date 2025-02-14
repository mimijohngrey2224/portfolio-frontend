// import React from 'react'

// function AboutMe() {
//   return (
//     <div>
//         <div className='text-center text-2xl mt-10'>
//          <div>
//          <h1> Introduction/About Me Section</h1>
//          <h1>Hi! I'm [Blessing], a passionate full-stack web developer with one year of experience in building dynamic and responsive web applications. I specialize in both front-end and back-end technologies, and I thrive on turning complex problems into elegant, user-friendly solutions. My goal is to continuously improve and expand my skills while creating high-quality projects that impact users positively.</h1>
//          </div>
//         </div>
//         <div className='text-center text-xl mt-10'>
//        <div>
//        <h1>Technical Skills</h1>
//             <p>Front-End: HTML5, CSS3, JavaScript, React.js, Vue.js, Tailwind CSS, Bootstrap
//                 Back-End: Node.js, Express.js, RESTful APIs, GraphQL
//                 Databases: MongoDB, MySQL, PostgreSQL
//                 Version Control: Git, GitHub, GitLab
//                 Tools: Docker, Postman, Webpack, NPM/Yarn, VS Code</p>
//        </div>
//         </div>
//         <div className='text-center text-xl mt-10'>
//             <div>
//             <h1>Experience/Projects</h1>
//             <p>Over the past year, I’ve had the opportunity to work on several full-stack projects that involved both front-end and back-end development. For example:

//             Project Name 1: Developed a responsive e-commerce website using React for the front-end and Node.js for the back-end, integrated with Stripe for payment processing.
//             Project Name 2: Built a task management application where users can create, update, and delete tasks using Express.js for the back-end, and MongoDB for data storage.
//             Project Name 3: Contributed to an open-source project that focuses on improving accessibility on the web using semantic HTML and ARIA roles.</p>
//             </div>
//         </div>
//         <div>
//            <div>
//            <h1>Learning & Growth</h1>
//            <p>Despite only having a year of professional experience, I’m constantly learning and experimenting with new technologies. I regularly take courses on platforms like [mention any platforms like Udemy, Coursera, or freeCodeCamp], and I’m currently deepening my understanding of cloud services such as AWS and exploring serverless architectures.</p>
//            </div>
//         </div>
//         <div>
//            <div>
//            <h1>Approach to Development
//             </h1>
//             <p>My approach to web development is centered around creating clean, maintainable code that is user-centric. I prioritize writing scalable and modular code, and I love collaborating with others to solve problems efficiently. I enjoy learning from challenges, and I believe in constantly adapting to new tools and techniques.</p>
//            </div>
//         </div>
//         <div>
//             <div>
//                 <h1> Personal Touch</h1>
//                 <p>I’ve always been fascinated by technology, and web development seemed like the perfect way to blend my creativity with problem-solving. The ability to build things from the ground up and see them come to life is what excites me every day about this career.</p>
//             </div>
//         </div>
//         <div>
//             <div>
//                 <h1>I’ve always been fascinated by technology, and web development seemed like the perfect way to blend my creativity with problem-solving. The ability to build things from the ground up and see them come to life is what excites me every day about this career.</h1>
//                 <p>I’m always open to new opportunities and collaborations. Feel free to reach out to me via [insert contact method or form link] if you'd like to discuss a potential project or learn more about my work!</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AboutMe


import React from 'react';

function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Introduction/About Me Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hi! I'm <span className="text-orange-500">Blessing John</span>,</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A passionate full-stack web developer with one year of experience in building dynamic and responsive web applications. 
          I specialize in both front-end and back-end technologies, and I thrive on turning complex problems into elegant, 
          user-friendly solutions. My goal is to continuously improve and expand my skills while creating high-quality projects 
          that impact users positively.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          <strong>Front-End:</strong> HTML5, CSS3, JavaScript, React.js, Vue.js, Tailwind CSS, Bootstrap<br />
          <strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, GraphQL<br />
          <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL<br />
          <strong>Version Control:</strong> Git, GitHub, GitLab<br />
          <strong>Tools:</strong> Docker, Postman, Webpack, NPM/Yarn, VS Code
        </p>
      </section>

      {/* Experience/Projects Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience/Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Over the past year, I’ve had the opportunity to work on several full-stack projects that involved both front-end and back-end development. For example:
          <ul className="list-disc pl-5 mt-4 text-left">
            <li><strong>Project Name 1:</strong> Developed a responsive e-commerce website using React for the front-end and Node.js for the back-end, integrated with Stripe for payment processing.</li>
            <li><strong>Project Name 2:</strong> Built a task management application where users can create, update, and delete tasks using Express.js for the back-end, and MongoDB for data storage.</li>
            <li><strong>Project Name 3:</strong> Contributed to an open-source project that focuses on improving accessibility on the web using semantic HTML and ARIA roles.</li>
          </ul>
        </p>
      </section>

      {/* Learning & Growth Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning & Growth</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Despite only having a year of professional experience, I’m constantly learning and experimenting with new technologies. 
          I regularly take courses on platforms like Udemy, Coursera, and freeCodeCamp, and I’m currently deepening my understanding 
          of cloud services such as AWS and exploring serverless architectures.
        </p>
      </section>

      {/* Approach to Development Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Approach to Development</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          My approach to web development is centered around creating clean, maintainable code that is user-centric. I prioritize 
          writing scalable and modular code, and I love collaborating with others to solve problems efficiently. I enjoy learning 
          from challenges, and I believe in constantly adapting to new tools and techniques.
        </p>
      </section>

      {/* Personal Touch Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Touch</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I’ve always been fascinated by technology, and web development seemed like the perfect way to blend my creativity with 
          problem-solving. The ability to build things from the ground up and see them come to life is what excites me every day 
          about this career.
        </p>
      </section>

      {/* Final Call to Action */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect!</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I’m always open to new opportunities and collaborations. Feel free to reach out to me if you'd like to discuss a potential 
          project or learn more about my work!
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
