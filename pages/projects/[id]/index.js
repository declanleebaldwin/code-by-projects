import { useRouter } from 'next/router'
import { PROJECTS } from '../../../config'

const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const project = PROJECTS[id]
  if (!project) {
    return <></> // redirect to projects page, error snackbar
  }
  return (
    <>
      <h1>Project: {id}</h1>
    </>
  )
}

export default Project