import React,{useRef,useImperativeHandle}from "react";
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref) => {

const InputRef = useRef();

const activate = () => {
    InputRef.current.focus()
}

useImperativeHandle(ref,()=>{
    return{
        focus:activate
    }
})
return(
    <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            ref={InputRef}
          />
        </div>
)

});


export default Input;




