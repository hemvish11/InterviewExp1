
import 'React' from React
  const tabIndex = () => {
      const moveFocus = (direction: 'next' | 'prev') => {
    const focusableElements = Array.from(
      document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ) as HTMLElement[]

    const currentIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement,
    )

    if (currentIndex !== -1) {
      const nextIndex =
        direction === 'next' ? currentIndex + 1 : currentIndex - 1
      if (focusableElements[nextIndex]) {
        focusableElements[nextIndex].focus()
      }
    }
  }
    return (
      <div
        ref={dropdownContainerRef}
        tabIndex={0}
        onKeyDown={(e: any) => {
           if (e.key === 'Tab') {
            e.preventDefault() 
            moveFocus(e.shiftKey ? 'prev' : 'next') 
          }
        }}
      >
        
      </div>
    )
  }
  
  export default tabIndex
  