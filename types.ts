export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  link: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TabItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export enum InquiryType {
  PURCHASE = "작품 구매",
  CLASS = "클래스 신청",
  COLLAB = "협업 제안",
  OTHER = "기타 문의"
}