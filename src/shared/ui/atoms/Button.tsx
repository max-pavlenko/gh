import {ComponentProps, FC, PropsWithChildren} from 'react'

type Props = ComponentProps<'button'>;

const Button: FC<PropsWithChildren<Props>> = ({children, className, ...props}) => {
   return (
       <button className={`bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 ${className}`} {...props}>
          {children}
       </button>
   );
};

export default Button;
