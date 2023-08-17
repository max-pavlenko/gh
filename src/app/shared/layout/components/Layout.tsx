import {FC, PropsWithChildren} from 'react'

const Layout: FC<PropsWithChildren> = ({children}) => {
   return (
       <div className='min-h-[100dvh] bg-gray-200 p-12'>
          {children}
       </div>
   );
};

export default Layout;
