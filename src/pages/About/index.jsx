import './index.scss'
import { CiMedal } from 'react-icons/ci'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { GrDiamond } from 'react-icons/gr'

const cultures = [
  { icon: <CiMedal />, title: '我们的使命', content: ['助力企业商旅数智升级', '助力企业商旅降本增效'] },
  { icon: <HiOutlinePaperAirplane />, title: '我们的愿景', content: ['成为中国商旅行业第一品牌'] },
  { icon: <GrDiamond />, title: '我们的价值观', content: ['实事求是  勇于担当', '学习思考  用心创新'] },
]

const qualifications = [
  { src: require('../../assets/images/qualifications/2022年南方航空杰出服务商.jpg'), titles: ['2022年', '南方航空杰出服务商'] },
  { src: require('../../assets/images/qualifications/2022年南方航空卓越贡献合作伙伴.jpg'), titles: ['2022年', '南方航空卓越贡献合作伙伴'] },
  { src: require('../../assets/images/qualifications/2022年中国国际航空优秀服务商.jpg'), titles: ['2022年', '中国国际航空优秀服务商'] },
  { src: require('../../assets/images/qualifications/2022年东方航空出类拔萃奖.jpg'), titles: ['2022年', '东方航空出类拔萃奖'] },
  { src: require('../../assets/images/qualifications/2022年山东航空卓越贡献奖.png'), titles: ['2022年', '山东航空卓越贡献奖'] },
  { src: require('../../assets/images/qualifications/2022年海南航空优秀合作伙伴.jpg'), titles: ['2022年', '海南航空优秀合作伙伴'] },
  { src: require('../../assets/images/qualifications/2022年人力资源服务商百强.jpg'), titles: ['2022年', '人力资源服务商百强'] },
  { src: require('../../assets/images/qualifications/2021-2022年最具影响力人力资源品牌.jpg'), titles: ['2021-2022年', '最具影响力人力资源品牌'] },
  { src: require('../../assets/images/qualifications/2021年胡润百富企业商旅服务最佳表现奖.jpg'), titles: ['2021年', '胡润百富企业商旅服务最佳表现奖'] },
  { src: require('../../assets/images/qualifications/2021-2022年东方航空指定合作差旅管理服务商.jpg'), titles: ['2021-2022年', '东方航空指定合作差旅管理服务商'] },
  { src: require('../../assets/images/qualifications/2021年南方航空至尊星耀奖.jpg'), titles: ['2021年', '南方航空至尊星耀奖'] },
  { src: require('../../assets/images/qualifications/2021年南方航空最佳合作伙伴.jpg'), titles: ['2021年', '南方航空最佳合作伙伴'] },
  { src: require('../../assets/images/qualifications/国际航协IATA资质.png'), titles: ['国际航协', 'IATA资质'] },
  { src: require('../../assets/images/qualifications/上海市文化旅游局4A级旅行社资质.png'), titles: ['上海市', '文化旅游局4A级旅行社资质'] },
  { src: require('../../assets/images/qualifications/中国文化旅游部出境和国内旅游资质.png'), titles: ['中国文化旅游部', '出境和国内旅游资质'] },
  { src: require('../../assets/images/qualifications/上海市会议经营与服务（会议服务机构）AAAA资质.png'), titles: ['上海市会议经营与服务（会议服务机构）AAAA资质'] },
  { src: require('../../assets/images/qualifications/信息系统安全等级保护备案二级证明.jpg'), titles: ['信息系统安全等级保护备案二级证明'] },
  { src: require('../../assets/images/qualifications/ISO27001信息安全管理体系认证证书.png'), titles: ['ISO27001信息安全管理体系认证证书'] },
  { src: require('../../assets/images/qualifications/ISO9001管理体系认证证书.png'), titles: ['ISO9001管理体系认证证书'] },
  { src: require('../../assets/images/qualifications/中国国家版权局颁发软件著作权.png'), titles: ['中国国家版权局颁发软件著作权'] },
]

const features = [
  { src: require('../../assets/images/frontDesk.jpeg'), title: '优创商旅前台' },
  { src: require('../../assets/images/workingArea.jpeg'), title: '优创商旅办公区域' },
  { src: require('../../assets/images/meetingRoom.jpeg'), title: '优创商旅会议室' },
]

export default function About() {
  return (
    <div className='about'>
      <div className="banner">
        <div className="mask">
          <h1>关于我们</h1>
          <h3>ABOUT US</h3>
          <h4>做更好的自己, 做更好的服务</h4>
        </div>
      </div>
      <div className="introduction">
        <h1>优创 (上海) 国际旅行社有限公司</h1>
        <h4>UC Travel (Shanghai) Co., Ltd</h4>
        <div className="wrapper">
          <div className="boss" />
          <div className='text'>
            <p>优创（上海）国际旅行社有限公司,中文简称优创商旅, 英文名字UCTRAVEL, 简称UCT, 公司成立2016年, UCT前身是上海工航旅游咨询有限公司成立于2005年, UCT团队多年来持续深耕于出行大交通领域, 培养和沉淀了一批优秀的专业人才, 目前公司业务分企业差旅, 平台供应商, MICE定制, 游学策划, 四个板块。</p>
            <p>UCT专注商务旅行行业, 服务全国800多家企事业单位和6万名高端个人客户, 为客户提供产品业务覆盖机票、火车票、酒店、租车、签证、保险、会议定制、游学策划等企业商旅全品类服务。</p>
            <p>UCT是商旅品类的领军品牌, 通过自主研发线上智能化管理系统, 支持与企业ERP、OA、费控等系统无缝对接, 优化企业采购、审批和报销流程, 透过数据分析帮助企业制定更合规合理的差旅制度, 同时秉承 "为客户提供有温度的旅行服务" 理念, 和严格要求自身以 "认真, 快, 坚守承诺, 不找借口" 的工作态度, 为企业持续创造价值, 帮助企业节省南旅成本, 提升管理效率!</p>
            <p>我们的资质: 国家旅游局出境和国内旅游资质, 上海市会议经营与达标机构, 国际航协VATA资质, 公务员机票政府采购资质</p>
            <p>我们的荣誉称号: 上海市政府五星诚信创建企业, 中国东方航空A级差旅服务商, 中国国际航空A级差旅服务商, 中国南方航空优质差旅服务商。</p>
          </div>
        </div>
      </div>
      <div className="culture">
        <div className="mask">
          <h1>企业文化</h1>
          <h4>CORPORATE CULTURE</h4>
          <div className="items">
            {cultures.map(culture => (
              <div className="card" key={culture.title}>
                {culture.icon}
                <h3>{culture.title}</h3>
                {culture.content.map(p => <h4 key={p}>{p}</h4>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="qualification">
        <h1>荣誉资质</h1>
        <h4>HONOR AND QUALIFICATION</h4>
        <div className="items">
          {qualifications.map(qualification => (
            <div className="card" key={qualification.src}>
              <img src={qualification.src} alt="荣誉资质" />
              {qualification.titles.map(p => <p key={p}>{p}</p>)}
            </div>
          ))}
        </div>
      </div>
      <div className="feature">
        <h1>企业风貌</h1>
        <h4>CORPORATE FEATURES</h4>
        <div className="items">
          {features.map(feature => (
            <div className="card" key={feature.title}>
              <img src={feature.src} alt="企业风貌" />
              <p>{feature.title}</p>
              <div className="line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}