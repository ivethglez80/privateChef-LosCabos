import React, { useState } from "react";
import { Button, Label, Textarea, TextInput, Select, Datepicker } from "flowbite-react";

const ContactForm = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        whatsapp:"",
        residence:"",
        date:"",        
        people:"",
        consulta: ""
    })

    // const baseUrl = "http://localhost:3001";
    // const baseUrl = "https://private-chef-los-cabos.vercel.app/";
     const baseUrl = process.env.NODE_ENV === "production" ? "https://private-chef-los-cabos.vercel.app" : "http://localhost:3001";


    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            whatsapp: state.whatsapp,
            residence: state.residence,
            date: state.date,
            people: state.people,
            consulta: state.consulta
        }

        const res = await fetch(`${baseUrl}/contactus/form`,{
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res)=>{
            console.log(res);
            if(res.ok ){
                alert ("Email sent succesfully")
            }else{
                console.log("Error sending email");
            }
        })
    }

   

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
        
        setState((prevProps) => ({
            ...prevProps,
            [name]: value, 
            
        }));
        console.log(state);
    };

    const clearForm = () =>{
        setState({
            nombre: "",
            apellido: "",
            email: "",
            whatsapp:"",
            residence:"",            
            people:"",
            consulta: ""
          });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(state);
        await sendEmail();
        clearForm();
    }


    return (
        <div className="sm: flex flex-row">
        <div >
            <form onSubmit={handleSubmit} >
                <div className="flex gap-5">
                <div className="mb-3 w-1/2">                   
                    <Label htmlFor="name1" value="Name:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="nombre" value={state.nombre} placeholder="Name" required onChange={handleInput}></TextInput>
                </div>
                <div className="mb-3 w-1/2">                   
                    <Label htmlFor="lastName" value="Last Name:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="apellido" value={state.apellido} placeholder="Last Name" required  onChange={handleInput}></TextInput>
                </div>
                </div>
                <div className="mb-3">                    
                    <Label htmlFor="email" value="E-mail:" className="font-txt text-slate-200"></Label>                    
                    <TextInput type="email" name="email" value={state.email} placeholder="name@mail.com" onChange={handleInput}></TextInput>
                </div>
                <div className="flex justify-between">
                <div className="mb-3">                   
                    <Label htmlFor="mobile" value="Whatsapp:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="number" name="whatsapp" value={state.whatsapp} placeholder="(00)-00-00000000" required  onChange={handleInput}></TextInput>
                </div>
                <div className="mb-3">                   
                    <Label htmlFor="country" value="Country and city of residence:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="residence" value={state.residence} placeholder="City, Country" required  onChange={handleInput}></TextInput>
                </div>
                </div>
                <div className="flex justify-between">
                <div className="mb-3">                   
                    <Label htmlFor="fecha" value="Required service date:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="date" value={state.date} placeholder="dd/mm/yyyy" required onChange={handleInput}></TextInput>                  
                    
                </div>
                <div className="mb-3">                   
                    <Label htmlFor="people" value="Number of guests:" className="font-txt text-slate-200"></Label>                   
                    <Select name="people" required  value={state.people} onChange={handleInput}>
                        <option >1 to 5</option>
                        <option >6 to 10</option>
                        <option >11 to 20</option>
                        <option >21-49</option>
                        <option >50+</option>
                    </Select> 
                </div>
                </div>
                <div className="mb-3">
                    <Label htmlFor="detalle" value="Please provide a description of the service you are interested in:" className="font-txt text-slate-200"></Label> <br />
                    <Textarea
                        placeholder="I'm interested in..."
                        required rows={5}
                        name="consulta"
                        value={state.consulta}
                        onChange={handleInput}
                                                 
                    />
                </div>
                <div className="mb-3 flex justify-start">
                    
                    <Button type="submit" className="bg-yellow-400 enabled:hover:bg-yellow-500">Submit</Button>
                </div>
            </form>
        </div>        
        </div>
    )
}

export default ContactForm;