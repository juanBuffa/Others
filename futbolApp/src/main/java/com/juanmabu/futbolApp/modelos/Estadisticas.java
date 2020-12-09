package com.juanmabu.futbolApp.modelos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author juanc
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Estadisticas {

    private String position,
            playedGames,
            won,
            draw,
            lost,
            goalsFor,
            goalsAgainst,
            goalDifference;

    private Equipo equipo;

    private int puntos;

    public String getPosition() {
        return position;
    }

    public int getPuntos() {
        this.puntos = Integer.parseInt(this.won) * 3 + Integer.parseInt(this.draw);
        return this.puntos;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPlayedGames() {
        return playedGames;
    }

    public void setPlayedGames(String playedGames) {
        this.playedGames = playedGames;
    }

    public String getWon() {
        return won;
    }

    public void setWon(String won) {
        this.won = won;
    }

    public String getDraw() {
        return draw;
    }

    public void setDraw(String draw) {
        this.draw = draw;
    }

    public String getLost() {
        return lost;
    }

    public void setLost(String lost) {
        this.lost = lost;
    }

    public String getGoalsFor() {
        return goalsFor;
    }

    public void setGoalsFor(String goalsFor) {
        this.goalsFor = goalsFor;
    }

    public String getGoalsAgainst() {
        return goalsAgainst;
    }

    public void setGoalsAgainst(String goalsAgainst) {
        this.goalsAgainst = goalsAgainst;
    }

    public String getGoalDifference() {
        return goalDifference;
    }

    public void setGoalDifference(String goalDifference) {
        this.goalDifference = goalDifference;
    }

    public Equipo getTeam() {
        return equipo;
    }

    public void setTeam(Equipo equipo) {
        this.equipo = equipo;
    }

    @Override
    public String toString() {
        return "Statistic{" + "position=" + position + ", playedGames=" + playedGames + ", won=" + won + ", draw=" + draw + ", lost=" + lost + ", goalsFor=" + goalsFor + ", goalsAgainst=" + goalsAgainst + ", goalDifference=" + goalDifference + ", team=" + equipo + '}';
    }

}
