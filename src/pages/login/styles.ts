import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #eff3f9);
`
export const LoginCard = styled.div`
background: white;
padding: 40px 50px;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
width: 500px
`

export const InputInform = styled.input`
width: 100%;
padding: 10px 15px;
margin: 10px 0;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 16px;
background-color: #f9f9f9;
transition: border-color 0.3s;

&:focus{
 border-color: blue;
 outline: none;
}
`

export const Error = styled.p`
color: red;
font-size: 14px;
margin: 5px 0;
`  
  
  export const Example = styled.p`
  color: grey;
  font-size: 14px;
  margin: 5px 0;
 `

 export const LogoContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items:center;
 background-color: #ff003c;
 color: white;
 gap: 1em;
 padding: 1em;
 margin-bottom: 1em
 `
