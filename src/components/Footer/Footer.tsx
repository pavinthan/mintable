import Logo from 'assets/images/logo.svg';
import type { ReactNode } from 'react';

interface ListItem {
  name: string;
  href: string;
}

interface ElementProps {
  items: ListItem[];
  className?: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
  children?: ReactNode;
}

const navigation = {
  account: [
    { name: 'Create a store', href: '/' },
    { name: 'List an Item for sale', href: '/' },
  ],
  profile: [
    { name: 'My Profile', href: '/' },
    { name: 'Browse', href: '/' },
  ],
  help: [
    { name: 'FAQ', href: '/' },
    { name: 'Mintable guide', href: '/' },
  ],
  buy: [
    { name: 'Digital Items', href: '/' },
    { name: 'Stores', href: '/' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms of use', href: '/' },
  ],
};

function ListElement({ items, className = '' }: ElementProps) {
  return (
    <ul className={`mt-4 space-y-4 ${className}`}>
      {items.map((item: ListItem) => (
        <li key={item.name}>
          <a href={item.href} className="text-base">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function List({ title, items, children }: ListProps) {
  return (
    <div>
      <h3 className="font-semibold tracking-wider">{title}</h3>
      <div className="lg:flex">
        <ListElement items={items} />
        {children}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <List title="My account" items={navigation.account}>
                <ListElement className="lg:ml-6" items={navigation.profile} />
              </List>
              <List title="Need Help?" items={navigation.help} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <List title="Buy an Item" items={navigation.buy} />
              <List title="Legal" items={navigation.legal} />
            </div>
          </div>

          <div className="mt-12 md:mt-0 space-y-8 xl:col-span-1 order-last lg:order-first">
            <div className="flex items-center">
              <img className="h-10" src={Logo} alt="Company name" />
              <h2 className="ml-3 font-semibold text-xl">Mintable</h2>
            </div>
            <a className="flex text-base font-semibold" href="/">
              Join our community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
