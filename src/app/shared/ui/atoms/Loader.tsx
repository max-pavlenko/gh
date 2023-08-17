import {ComponentProps, FC} from 'react'
import Image from "next/image";

type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>;

const Loader: FC<Props> = ({...props}) => {
   return (
       <Image priority src='/icons/bucket.svg' alt='loader' width={200} height={200} {...props}/>
   );
};

export default Loader;
