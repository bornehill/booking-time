import baseService from './base-service';

export const centreService = {
  getAllCentres,
  getActivities,
  getCentreSchedule
};

function getAllCentres() {
  return baseService.get('centres');
}

function getCentreSchedule(centre) {
  return baseService.get('centre/schedule', { id: centre.id });
}

function getActivities() {
  return baseService.get('activities');
}
