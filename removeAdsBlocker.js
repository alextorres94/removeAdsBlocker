setTimeout(() => removeAdsBlocker(), 5000);

const BLOCKER_IDENTIFIER = '.fc-ab-root'
const ARTICLE_IDENTIFIER = 'body'

function getIdentifier(id) {
  return document.querySelector(id)
}

function removeBlocker(blocker, article) {
  blocker.style.display = 'none'
  article.style.overflow = 'initial'
}

function removeAdsBlocker() {
  const blocker = getIdentifier(BLOCKER_IDENTIFIER)
  const article = getIdentifier(ARTICLE_IDENTIFIER)
  const isBlocking = blocker && article

  if (!isBlocking) { return }
  alert('Removing the blocker...')

  removeBlocker(blocker, article)
}
