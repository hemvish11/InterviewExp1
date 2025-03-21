const dropdownContainerRef = useRef<HTMLDivElement>(null);

const [active, setActive] = useState(false);

const toggle = () => {
  setActive(!active);
};

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownContainerRef.current &&
      !dropdownContainerRef?.current?.contains(event.target as Node)
    ) {
      toggle();
    }
  };

  if (active) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [active, toggle]);
