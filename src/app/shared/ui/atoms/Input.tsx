import {ComponentProps, FC} from 'react'

type Props = ComponentProps<'input'>;

const Input: FC<Props> = ({className, ...props}) => {
   return (
       <input className={`rounded-md py-2 px-3 min-w-[150px] w-full ${className}`} {...props} />
   );
};

export default Input;
