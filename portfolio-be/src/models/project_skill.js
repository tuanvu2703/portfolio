'use strict';

export default (sequelize, DataTypes) => {
  const ProjectSkill = sequelize.define('ProjectSkill', {
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Skills',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProjectSkill',
    tableName: 'Project_skills'
  });

  ProjectSkill.associate = (models) => {
    ProjectSkill.belongsTo(models.Project, { foreignKey: 'project_id' });
    ProjectSkill.belongsTo(models.Skill, { foreignKey: 'skill_id' });
  };

  return ProjectSkill;
};