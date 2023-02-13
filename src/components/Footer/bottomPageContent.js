import 'components/components.scss'
import 'views/style.scss'
import { RedirectButtonFull } from 'components/Buttons/buttons'
import { footerImg } from "utils/images-url"

const BottomPageContent = ({ content }) => {
  return (
    <div className="footer-block-content">
      <div className="diagonal-box">
        <div className="content"></div>
      </div>
      <div className="footer-block">
        <div className="footer-content">
          <img width="78" height="41" alt="duo" className="lazyload picture-bench"
            data-src={footerImg} />
          <div className="first-block">
            <h4 className="title-block title-3">{content.title}</h4>
            <div className="subtitle-block subtitle-1">{content.text}</div>
            <RedirectButtonFull link={content.link} buttonText={content.linkText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPageContent