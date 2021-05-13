// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useHistory } from "react-router-dom";

// import { Link } from "react-router-dom";

// const SignupSchema = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   topic: Yup.string().required("Required"),
// });
// //

// export const PlanVideoCall = () => {
//   const history = useHistory();

//   const onclick = () => {
//     history.push("/success");
//   };
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           topic: "",
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={(values) => {
//           // same shape as initial values
//           console.log(values);
//         }}
//       >
//         {/* {console.log(Formik)} */}
//         {({ errors, touched, values }) => (
//           <div className="video videocall">
//             <div className="leftspace">
//               {/* <button className="closebtn" onClick={this.props.close}>
//               X
//             </button> */}
//               <h1 className="call">
//                 Let's plan a video call!🎥
//                 {/* <p className="icon">
//                 <ImVideoCamera />
//               </p> */}
//               </h1>
//               <h4 className="personal ">Personal details</h4>
//               <Form
//               //    onSubmit={validationSchema && onclick}
//               >
//                 <div className="grid">
//                   <div className="gridLeft">
//                     <Field name="name" placeholder="name" className="input" />
//                     <ErrorMessage name="name" />
//                     {/* {errors.name && touched.name ? (
//                     <div>{errors.name}</div>
//                   ) : null} */}
//                     <Field name="email" className="input" placeholder="Email" />
//                     <ErrorMessage name="email" />
//                     {/* {errors.email && touched.email ? (
//                     <div>{errors.email}</div>
//                   ) : null} */}
//                   </div>
//                   <div className="gridRight">
//                     <textarea
//                       type="text"
//                       className="input textarea"
//                       placeholder="What do you want to talk about"
//                       //   value={this.state.topic}
//                       name="topic"
//                       //   onChange={this.onchange}
//                     />
//                     {/* {errors.topic && touched.topic ? (
//                     <div>{errors.topic}</div>
//                   ) : null} */}
//                     <ErrorMessage name="topic" />
//                     {/* <Link to="/Success"> */}
//                     <button type="submit" className="btn btn-info radius">
//                       Send Inquiry
//                     </button>
//                     {/* </Link> */}
//                   </div>
//                 </div>
//               </Form>
//             </div>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };
// export default PlanVideoCall;
