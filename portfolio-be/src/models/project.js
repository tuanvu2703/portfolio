'use strict';

export default (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail_url: DataTypes.STRING,
    github_url: DataTypes.STRING,
    live_url: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });

  Project.associate = (models) => {
    Project.belongsToMany(models.Skill, {
      through: 'ProjectSkill',
      foreignKey: 'project_id',
      otherKey: 'skill_id'
    });
  };

  return Project;
};