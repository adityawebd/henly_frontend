import Link from 'next/link'

const Button = ({ url, name }) => {
  return (
    <>
        <Link href={url} className='border bg-primary rounded-full py-2 px-4'>{name}</Link>
    </>
  )
}

export default Button
