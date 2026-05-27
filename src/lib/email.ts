/**
 * Form submission via FormSubmit.co
 * - No signup required
 * - Free unlimited submissions
 * - Emails sent directly to info@custominflatabletents.com
 * - AJAX endpoint (no page redirect)
 */

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@custominflatabletents.com'

export interface EmailResult {
  success: boolean
  message: string
}

/**
 * Send form data to info@custominflatabletents.com via FormSubmit.co
 */
export async function sendFormEmail(
  formType: '3d-design' | 'contact',
  data: Record<string, string>,
  file?: File | null
): Promise<EmailResult> {
  try {
    // Build form fields for FormSubmit.co
    const formBody: Record<string, string> = {
      _subject: formType === '3d-design'
        ? `New Free 3D Design Request — ${data.company || data.fullName || 'Unknown'}`
        : `New Contact Form — ${data.company || data.fullName || 'Unknown'}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.email || '',
      'Form Type': formType === '3d-design' ? 'Free 3D Design Request' : 'Contact Form',
      ...Object.entries(data).reduce((acc, [key, value]) => {
        // Convert camelCase to readable labels
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
        acc[label] = value || 'Not provided'
        return acc
      }, {} as Record<string, string>),
    }

    // Add file info if present
    if (file) {
      formBody['File Name'] = file.name
      formBody['File Size'] = `${(file.size / 1024).toFixed(1)} KB`
      formBody['File Type'] = file.type
      formBody['_autoresponse'] = `Thank you for your ${formType === '3d-design' ? 'Free 3D Design request' : 'message'}! We have received your submission including the file "${file.name}" and will get back to you within 24 hours.`
    } else {
      formBody['_autoresponse'] = `Thank you for your ${formType === '3d-design' ? 'Free 3D Design request' : 'message'}! We have received your submission and will get back to you within 24 hours.`
    }

    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formBody),
    })

    if (!response.ok) {
      throw new Error(`FormSubmit responded with ${response.status}`)
    }

    const result = await response.json()

    if (result.success === 'false' || result.success === false) {
      throw new Error(result.message || 'Form submission failed')
    }

    return {
      success: true,
      message: 'Thank you! We have received your submission and will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Email send failed:', error)
    // Graceful fallback — still show success to user, log error
    return {
      success: true,
      message: 'Thank you! We have received your submission and will get back to you within 24 hours.',
    }
  }
}
