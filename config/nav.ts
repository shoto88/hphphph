import { NavConfig } from '@/types';
import { servicesConfig } from './services';

export const navConfig: NavConfig = {
  mainNav: [
    { label: 'ホーム', href: '/' },
    { 
      label: '当院について', 
      href: '/about',
      children: [
        { label: '医師紹介', href: '/about/doctors' },
        { label: '理念・基本方針', href: '/about/philosophy' },
        { label: '当院の特徴', href: '/about/features' },
        { label: '施設紹介', href: '/about/facility' },
      ]
    },
    { 
      label: '診療内容', 
      href: '/services',
      children: servicesConfig.serviceCategory.flatMap(category => 
        category.services.map(service => ({
          label: service.name,
          href: `/services/${category.slug}/${service.slug}`
        }))
      )
    },
    { 
      label: 'お知らせ', 
      href: '/news',
      children: [
        { label: 'お知らせ一覧', href: '/news' },
        { label: 'ブログ', href: '/news/blog' },
      ]
    },
    { label: 'アクセス', href: '/access' },
    { 
      label: 'お問い合わせ', 
      href: '/contact',
      children: [
        { label: 'お問い合わせフォーム', href: '/contact' },
        { label: '予約について', href: '/contact/reservation' },
        { label: 'よくある質問', href: '/contact/faq' },
      ]
    },
  ],
};