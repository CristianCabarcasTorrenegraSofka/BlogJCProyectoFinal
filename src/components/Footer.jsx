export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h3 id="contactanos">Contactanos:</h3>
                
                <div className="footer-items">
                    <img src="assets\whatsapp.png" alt="WhatsApp" className="icon" />
                    <p className="p-footer">+57 323 333 3333</p>
                    <img src="assets\correo-electronico.png" alt="Correo" className="icon" />
                    <p className="p-footer">blogtravelgmail.com</p>
                </div>
            </div>

            <div className="footer">
                <h3 id="siguenos">Siguenos:</h3>
                <br />
                <div className="footer-items1">
                <img src="assets\facebook.png" alt="Facebook" className="icon1" />
                <p className="p-footer">@BlogTravel</p>
                <img src="assets\instagram.png" alt="Instagram" className="icon1" />
                <p className="p-footer">@BlogTravel</p>
                <img src="assets\tik-tok.png" alt="TikTok" className="icon1" />
                <p className="p-footer">@BlogTravel</p>
                </div>
            </div>
        </footer>
    )
}