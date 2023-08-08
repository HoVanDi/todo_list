// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Headline from './components/Headline';
// import ItemList from './components/ItemList';
// import Aside from './components/Aside';
// import BoxList from './components/BoxList';
// import Footer from './components/Footer';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = blog;
//   };

//   render() {
//     return (
//       <div id="layout">
//         <Header />
//         <main>
//           <section id="content">
//             <Headline bigTitle={this.state.bigTitle} />
//             <ItemList itemList={this.state.itemList} />
//             <button type="button" onClick={this.changeItem}>Change Data</button>
//           </section>

//           <Aside />

//           <BoxList boxList={this.state.boxList} />
//         </main>

//         <Footer />
//       </div>
//     );
//   };
//   changeItem = () => {
//     this.setState({
//       itemList: [
//         {
//           title: 'Title changed',
//           info: 'Proin ex nunc, bibendum ut magna quis.'
//         },
//         {
//           title: 'Hồ Văn Đi',
//           info: 'New information changed.'
//         },
//         {
//           title: 'Donec ut libero',
//           info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
//         }
//       ]
//     });
//   };
// };

// const blog = {
//   bigTitle: 'Consectetur elit proin sit amet neque.',
//   itemList: [
//     {
//       title: 'Proin ex nunc',
//       info: 'Proin ex nunc, bibendum ut magna quis.'
//     },
//     {
//       title: 'Blandit mollis',
//       info: 'Blandit mollis orci. Ut pretium diam ut tristique interdum amet condimentum.'
//     },
//     {
//       title: 'Donec ut libero',
//       info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
//     }
//   ],
//   boxList: [
//     'Placerat arcu vel',
//     'Duis at est nunc',
//     'Tellus at trist',
//     'Ut rhoncus'
//   ]
// };

// export default App;

import "./Todo.css";
import React from 'react'

const App = () => {
  return (
<div className="container">
  <div className="maincontent">
    <div className="todo">
      #todo
    </div>
    <div className="navigation">
      <div className="navigation-all">
        <div className="navigation-bar all">
          All
        </div>
        <div className="all-line">
        </div>
      </div>
      <div className="navigation-active">
        <div className="navigation-bar active">
          Active
        </div>
        <div className="active-line" />
      </div>
      <div className="navigation-completed">
        <div className="navigation-bar completed">
          Completed
        </div>
        <div className="completed-line" />
      </div>
    </div>
    <hr />
    <div className="form">
      <input type="text" id="month-input" className="form-control" placeholder="add details" />
      <button className="btn">Add</button>
    </div>
  </div>
</div>

  )
}

export default App
