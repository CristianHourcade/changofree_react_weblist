const WhatsappComponent = ({contacto}) => {

    return (
        <a style={{    position: 'fixed',
            bottom: '15px',
            left: '15px',
            background: '#1bd741',
            height: '60px',
            width: '60px',
            borderRadius: '30px',
            display:'flex',
            justifyContent:'center',
            zIndex: '9999',
            boxShadow: '0px 8px 18px -12px black',
            alignItems:'center', color:'white'}}
            href={"https://wa.me/54"+contacto}
            target="_blank">
                <i className="fab fa-whatsapp" style={{fontSize:'34px'}}></i>
        </a>
    )
}

export default WhatsappComponent;