
export const submitForm = async formData => {
  // { first:"",last:"",email:"",org:"",role:"",interest:"",msg:"" }
  await fetch('https://strata-crm-rho.vercel.app/api/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_CRM_API}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: formData.first,
      last_name: formData.last,
      email: formData.email,
      job_title: `${formData.role} @ ${formData.org}`,
      // organisation_id: formData.org,
      source: 'Website',
      notes: formData.msg
    })
  })
  .then(response => response.json())
  .then(response => console.log(response))
  return true
}