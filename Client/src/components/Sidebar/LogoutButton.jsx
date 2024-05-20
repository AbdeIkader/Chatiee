import { BiLogOut } from 'react-icons/bi';
import useLogout from "../../hooks/useLogout";


export default function LogoutButton() {

  const { loading, logout } = useLogout();

  return <>

    <div className='bg-red-100 py-2 rounded-t-xl '>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-red-600 cursor-pointer' onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>

  </>
}
