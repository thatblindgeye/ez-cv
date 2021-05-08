export default function preventDisabledInteraction(e, condition) {
  const acceptedKeys = ['Tab', 'ArrowLeft', 'ArrowRight'];

  if (condition && (e.type === 'click' || acceptedKeys.indexOf(e.key) === -1)) {
    e.preventDefault();
  }
}
