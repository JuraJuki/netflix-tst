const NavbarItem = (props: { label: string }) => {
  return (
    <div className={"text-white cursor-pointer hover:text-gray-300 transition"}>{props?.label}</div>
  );
};

export default NavbarItem;
