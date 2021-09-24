import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RouteGuard({ children }){
    const router = useRouter();
    const customerReducer = useSelector(state=>state.customerReducer) 
    const { customer } = customerReducer
    const [authorized, setAuthorized] = useState(true);
    const { props } = children
    useEffect(() => {
        // on initial load - run auth check 
        authCheck(props);
        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(data) {
        if(data.protected && !customer){
            setAuthorized(false);
            router.push('/login');
        }else{
            setAuthorized(true);
        }
    }

    return (authorized && children);
}