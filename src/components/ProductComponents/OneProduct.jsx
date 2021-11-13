// import React, { Component } from "react";
// import axios from "axios";
// import AddCommentForm from "./AddCommentForm";



// export class OneThread extends Component {
//   state = {
//     oneProduct: null,
//     isLoading: true,
//   };
//   componentDidMount() {
//     axios
//       .get(
//         `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`,
//         {
//           withCredentials: true,
//         }
//       )
//       .then((response) => {
//         this.setState({ oneThread: response.data, isLoading: false });
//       })
//       .catch((err) => console.log(err));
//   }
//   render() {
//     const { isLoading, oneThread } = this.state;
//     return (
//       <div>
//         <h2>One Thread</h2>
//         {isLoading && <h1>...Loading</h1>}
//         {!isLoading && (
//           <div>
//             <h2>{oneThread.title}</h2>
//             <p>{oneThread.description}</p>
//             <p>{oneThread.category}</p>
//             <AddCommentForm history={this.props.history} />
//             {/* <Comments threadId={this.props.match.params} /> */}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// export default OneThread;
