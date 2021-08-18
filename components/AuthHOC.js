import React, {Component} from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'
// import { useJwt } from "react-jwt";
// import TokenContext from '../context/TokenContext'
// import ServerRedirect from 'utils/ServerRedirect'
// const { decodedToken, isExpired } = useJwt(token);



export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    
    static async getInitialProps(ctx) {
      const token = Cookies.get('carToken')
        console.log(token);
        // If user doesn't have a token, redirect away
        if(!token)
        {
          if(ctx.res){
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res.end()
          }else {
            Router.push('/login')
          }
        }
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
        // Return props.
        return { ...pageProps, token }
      }

      render() {
        return (
            <AuthComponent {...this.props} />
        )
      }
    }
}
