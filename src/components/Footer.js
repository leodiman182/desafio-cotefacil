const Footer = () => {
  const data = new Date();
  const year = data.getFullYear();

  return (
    <footer className="md:h-[80px] xl:h-[120px] px-[20px] lg:px-0 bg-slate-100">
      <div className='flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1024px] border-t-[1px] border-primary md:p-[20px] pt-[30px] pb-[10px]'>
        <img className='pb-[5px] h-[30px]' src="https://cotefacil.online/wp-content/uploads/2021/09/logo_site_cabecalho.png" alt="" />
        <p className='text-gray-500 text-center text-[13px]'>{ year } | Desenvolvido por <a className='hover:text-primary hover:cursor-pointer duration-150' target='_blank' href="https://portfolio-leodiman.vercel.app/" rel="noopener noreferrer">Leonardo Diman</a></p>
      </div>
    </footer>
  )
}

export default Footer;