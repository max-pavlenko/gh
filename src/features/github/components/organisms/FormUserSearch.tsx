import {ChangeEventHandler, ComponentProps, FC, FormEventHandler, useState} from 'react'
import Input from "@/shared/ui/atoms/Input";
import Button from "@/shared/ui/atoms/Button";

export type Props = Omit<ComponentProps<'form'>, 'onSubmit'> & {onSubmit: ({username}: { username: string }) => void};

const FormUserSearch: FC<Props> = ({className, onSubmit, ...props}) => {
   const [username, setUsername] = useState('max-pavlenko');

   const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
      setUsername(value);
   }

   const handleSubmit: FormEventHandler = (e) => {
      e.preventDefault();
      onSubmit({username});
   }

   return (
       <form className={`mb-6 flex md:flex-row flex-col w-full md:w-[70%] gap-4 items-center ${className}`} onSubmit={handleSubmit} {...props}>
          <Input value={username} onChange={handleUsernameChange}/>
          <Button>Search</Button>
       </form>
   );
};

export default FormUserSearch;
