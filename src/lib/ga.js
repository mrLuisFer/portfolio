/**
 * Log the pageview with their URL
 * @param {string} url
 * @param {string} title
 * @param {string} location
 * @returns {void}
 */
const pageview = (url, title = '', location = '') => {
  window.gtag &&
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
      page_title: title,
      page_location: location,
    })
}

/**
 * Log specific events happening
 * @param {Object} eventProps
 * @param {string} eventProps.action - Es el valor que aparecerá como la acción del evento en los informes de eventos de Google Analytics.
 * @param {string} eventProps.category
 * @param {string} eventProps.label
 * @param {number} eventProps.value
 * @example
 * const params = {
 *  action: "",
 *  category: "",
 *  label: "",
 *  value: 1
 * };
 * @returns {void}
 */
const event = ({ action, category, label = '', value }) => {
  window.gtag &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}

const ga = {
  event,
  pageview,
}
export default ga
