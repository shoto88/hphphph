import { ServiceCategory } from '@/types';

export const servicesConfig: ServiceCategory[] = [
  {
    name: '保険診療',
    slug: 'insurance',
    services: [
      { name: 'Headache', slug: 'headache', description: '頭痛の診断と治療' },
      { name: '婦人科', slug: 'gynecology', description: '婦人科の診療' },
      { name: '内科', slug: 'internal-medicine', description: '内科全般の診療' },
      { name: '漢方内科', slug: 'kampo-medicine', description: '漢方薬による治療' },
      { name: '交通事故リハビリ科', slug: 'traffic-accident-rehab', description: '交通事故後のリハビリテーション' },
      { name: '睡眠時無呼吸症候群', slug: 'sleep-apnea', description: 'CPAP療法など' },
      { name: 'ざ瘡（ニキビ）', slug: 'acne', description: 'ニキビの治療' },
      { name: '禁煙', slug: 'smoking-cessation', description: '禁煙支援' },
    ]
  },
  {
    name: '自由診療',
    slug: 'elective',
    services: [
      { name: '美容皮膚科', slug: 'cosmetic-dermatology', description: '美容皮膚科の施術' },
      { name: '人間ドック健康診断', slug: 'health-checkup', description: '総合的な健康診断' },
      { name: '薄毛・男・女', slug: 'hair-loss', description: '男女の薄毛治療' },
      { name: '肥満（ダイエット）', slug: 'obesity', description: 'ダイエット指導' },
      { name: '点滴 注射', slug: 'iv-injection', description: '各種点滴・注射治療' },
      { name: 'ED', slug: 'erectile-dysfunction', description: 'ED治療' },
    ]
  }
];