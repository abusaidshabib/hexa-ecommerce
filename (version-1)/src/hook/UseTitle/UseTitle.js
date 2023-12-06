import { useEffect } from "react"

const useTitle = (title) =>{
  useEffect(() => {
    document.title = `${title}-Hexa`;
  }, [title] )
}

export default useTitle;