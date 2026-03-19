'use strict';

export default (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.ARRAY(DataTypes.TEXT),
    role: DataTypes.STRING,
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