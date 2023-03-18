import './index.scss'
import { ReactComponent as Logo } from '../../logo.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <Logo />
        <div className='info'>
          <p>公司名称: 优创(上海)国际旅行社有限公司</p>
          <p>邮箱: uc@uctravelsky.com</p>
          <p>电话: 400-109-0166</p>
          <p>公司地址: 上海市嘉定区爱特路855号A栋11层</p>
          <p>Copyright&copy; 2013-2023, ???.com All Right Reserved 沪ICP备2021023923号-1</p>
        </div>
      </div>
    </div>
  )
}