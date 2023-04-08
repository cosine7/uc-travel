import './index.scss'
import { ReactComponent as Logo } from '../../logo.svg';
import Button from '@components/Button';
import { useCallback, useState } from 'react';
import axios from 'axios'

const phoneRegExp = /^1[34578]\d{9}$/
const telephoneRegExp = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export default function Footer() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const onSubmit = useCallback(async e => {
    e.preventDefault()
    setLoading(true)

    const data = {}

    try {
      for (let [key, value] of new FormData(e.target).entries()) {
        if (!value) {
          throw new Error(`${e.target[key].placeholder}不可为空`)
        }
        data[key] = value
      }

      if (!phoneRegExp.test(data.phone)) {
        throw new Error('无效手机号')
      }
      if (!telephoneRegExp.test(data.companyTelephone) && !phoneRegExp.test(data.companyTelephone)) {
        throw new Error('无效企业电话')
      }
      if (!emailRegExp.test(data.companyEmail)) {
        throw new Error('无效企业邮箱')
      }
      setError('')

      axios.post(
        process.env.REACT_APP_SEND_EMAIL_API,
        {
          params: {
            method: 'SERVICE_SENDEMAIL',
            servicedata: {
              coName: data.company,
              coContacter: data.contactPerson,
              contactPhoneNum: data.phone,
              jonName: data.position,
              coTelephone: data.companyTelephone,
              coEmail: data.companyEmail,
            },
          },
        }
      )
      .then(() => {
        window.confirm('发送成功')
      })
      .catch(() => {
        window.confirm('发送失败，请重试')
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className='footer'>
      <div className="contact">
        <form className="mask" onSubmit={onSubmit}>
          <h1>留下您的联系方式，我们的客户经理将与您联系</h1>
          <h4>如果您希望进一步了解商务旅行服务的相关信息，或加入我们企业商旅客户的行列，请留下您的联系方式</h4>
          <p className='error'>{error}</p>
          <div className='inputs'>
            <input type="text" placeholder='企业名称' name='company' />
            <input type="text" placeholder='联系人' name='contactPerson' />
            <input type="text" placeholder='手机号' name='phone' />
            <input type="text" placeholder='您的职位' name='position' />
            <input type="text" placeholder='企业电话' name='companyTelephone' />
            <input type="text" placeholder='企业邮箱' name='companyEmail' />
          </div>
          <Button
            text='立即咨询'
            className='submit-btn'
            loading={loading}
            disabled={loading}
          />
        </form>
      </div>
      <div className='wrapper'>
        <Logo />
        <div className='info'>
          <p>公司名称: 优创(上海)国际旅行社有限公司</p>
          <p>邮箱: uc@uctravelsky.com</p>
          <p>电话: 400-109-0166</p>
          <p>公司地址: 上海市嘉定区爱特路855号A栋11层</p>
          <p>Copyright&copy; 520uct.com All Right Reserved 沪ICP备2021023923号-1</p>
        </div>
      </div>
    </div>
  )
}