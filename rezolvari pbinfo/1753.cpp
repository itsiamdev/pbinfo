#include <fstream>
using namespace std;
ifstream fin("concurs2.in");
ofstream fout("concurs2.out");
int main()
{
    int c, n, s1[302], s2[302], i, p1, p2, kal = 0, p3, a1 = 0, a2 = 0, maxi1 = -1, maxi2 = -1, kal1 = 0, kal2 = 0, ind1 = 0, ind2 = 0;
    fin >> c;
    fin >> n;
    if (c == 1)
    {
        for (i = 1; i <= n; i++)
        {
            fin >> p3 >> p1 >> p2;
            if (p1 == 0)
            {
                kal++;
            }
            if (kal) break;
        }
        if (kal) fout << "NU";
        else fout << "DA";
    }
    if (c == 2)
    {
        for (i = 1; i <= n; i++)
        {
            fin >> p3 >> p1 >> p2;
            if (p3 == 1) a1++;
            else a2++;
        }
        fout << 1 << " " << a1 << '\n' << 2 << " " << a2;
    }
    if (c == 3)
    {
        for (i = 1; i <= n; i++)
        {
            fin >> p3 >> p1 >> p2;
            if (p3 == 1)
            {
                s1[++ind1] = p1 + p2;
                if (s1[ind1] > maxi1) maxi1 = s1[ind1];
            }
            if (p3 == 2)
            {
                s2[++ind2] = p1 + p2;
                if (s2[ind2] > maxi2) maxi2 = s2[ind2];
            }
        }
        for (i = 1; i <= ind1; i++)
        {
            if (s1[i] == maxi1) kal1++;
        }
        for (i = 1; i <= ind2; i++)
        {
            if (s2[i] == maxi2) kal2++;
        }
        fout << 1 << " " << maxi1 << " " << kal1 << '\n' << 2 << " " << maxi2 << " " << kal2 << '\n' << kal1 + kal2;
    }
}